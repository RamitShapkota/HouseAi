from pathlib import Path

import joblib
import pandas as pd
from sklearn.linear_model import Ridge
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler


BASE_DIR = Path(__file__).resolve().parent
DATASET_PATH = BASE_DIR / "dataset.csv"
MODEL_DIR = BASE_DIR / "saved_models"
MODEL_PATH = MODEL_DIR / "house_price_model.pkl"
SCALER_PATH = MODEL_DIR / "scaler.pkl"

TARGET_COLUMN = "median_house_value"
CATEGORICAL_COLUMNS = ["ocean_proximity"]
RANDOM_STATE = 42


def load_dataset():
    return pd.read_csv(DATASET_PATH)


def clean_dataset(data):
    cleaned_data = data.copy()

    numeric_columns = cleaned_data.select_dtypes(
        include=["number"]
    ).columns.tolist()
    numeric_features = [
        column for column in numeric_columns if column != TARGET_COLUMN
    ]
    numeric_medians = cleaned_data[numeric_features].median()

    cleaned_data[numeric_features] = cleaned_data[numeric_features].fillna(
        numeric_medians
    )
    categorical_data = cleaned_data[CATEGORICAL_COLUMNS]
    cleaned_data[CATEGORICAL_COLUMNS] = categorical_data.fillna("UNKNOWN")

    return cleaned_data, numeric_medians.to_dict()


def prepare_features(data):
    features = data.drop(columns=[TARGET_COLUMN])
    target = data[TARGET_COLUMN]

    encoded_features = pd.get_dummies(features, columns=CATEGORICAL_COLUMNS)
    feature_columns = encoded_features.columns.tolist()

    return encoded_features, target, feature_columns


def split_dataset(features, target):
    return train_test_split(
        features,
        target,
        test_size=0.2,
        random_state=RANDOM_STATE,
    )


def scale_features(x_train, x_test):
    scaler = StandardScaler()
    x_train_scaled = scaler.fit_transform(x_train)
    x_test_scaled = scaler.transform(x_test)

    return x_train_scaled, x_test_scaled, scaler


def train_model(x_train_scaled, y_train):
    model = Ridge(alpha=0.001)
    model.fit(x_train_scaled, y_train)

    return model


def train_final_model(features, target):
    final_scaler = StandardScaler()
    scaled_features = final_scaler.fit_transform(features)

    final_model = Ridge(alpha=0.001)
    final_model.fit(scaled_features, target)

    return final_model, final_scaler


def evaluate_model(model, x_test_scaled, y_test):
    predictions = model.predict(x_test_scaled)

    mse = mean_squared_error(y_test, predictions)
    rmse = mse ** 0.5

    return {
        "r2_score": r2_score(y_test, predictions),
        "rmse": rmse,
        "mae": mean_absolute_error(y_test, predictions),
    }


def save_artifacts(model, scaler, feature_columns, numeric_medians, metrics):
    MODEL_DIR.mkdir(parents=True, exist_ok=True)

    # These attributes help the backend prepare request data correctly.
    model.feature_columns_ = feature_columns
    model.numeric_medians_ = numeric_medians
    model.categorical_columns_ = CATEGORICAL_COLUMNS
    model.target_column_ = TARGET_COLUMN
    model.metrics_ = metrics

    joblib.dump(model, MODEL_PATH)
    joblib.dump(scaler, SCALER_PATH)


def main():
    data = load_dataset()
    cleaned_data, numeric_medians = clean_dataset(data)
    features, target, feature_columns = prepare_features(cleaned_data)

    x_train, x_test, y_train, y_test = split_dataset(features, target)
    x_train_scaled, x_test_scaled, _ = scale_features(x_train, x_test)

    model = train_model(x_train_scaled, y_train)
    metrics = evaluate_model(model, x_test_scaled, y_test)

    final_model, final_scaler = train_final_model(features, target)
    save_artifacts(
        final_model,
        final_scaler,
        feature_columns,
        numeric_medians,
        metrics,
    )

    print("Training completed successfully.")
    print(f"R2 Score: {metrics['r2_score']:.4f}")
    print(f"RMSE: {metrics['rmse']:.2f}")
    print(f"MAE: {metrics['mae']:.2f}")
    print(f"Model saved to: {MODEL_PATH}")
    print(f"Scaler saved to: {SCALER_PATH}")


if __name__ == "__main__":
    main()
