# House Price Training

This folder contains the production-ready machine learning training files for the House Price Prediction project.

The original Lab 3 files are kept unchanged. This folder is a clean copy prepared for future integration with a web application such as:

```text
houseai/
|-- frontend/
|-- backend/
|-- ml-service/
`-- training/
```

## Folder Purpose

The `training` folder is used only to train the house price prediction model and save the final machine learning artifacts.

The backend should not retrain the model during normal user requests. It should only load the saved model and scaler, accept user input, preprocess that input in the same format, and return a prediction.

## Training Workflow

1. Load `dataset.csv`.
2. Clean missing values in memory.
3. Select input features and target column.
4. Convert categorical data using one-hot encoding.
5. Split data into training and testing sets.
6. Scale the feature values using `StandardScaler`.
7. Train the selected Ridge Regression model.
8. Evaluate the model using R2 Score, RMSE, and MAE.
9. Save the trained model as `saved_models/house_price_model.pkl`.
10. Save the fitted scaler as `saved_models/scaler.pkl`.

## Why Ridge Regression Was Selected

The original Lab 3 notebook compared Linear Regression, Ridge, and Lasso.

For deployment, only one final algorithm is needed. Ridge Regression was selected because the original experiment showed it gives strong overall performance while adding regularization, which helps make the model more stable for real application use.

## How The Model Is Produced

Run the training script from inside the `training` folder:

```bash
python train.py
```

This command reads `dataset.csv`, trains the Ridge Regression model, evaluates it, and saves the model files inside `saved_models/`.

## How `house_price_model.pkl` Is Used In A Backend

The backend loads `house_price_model.pkl` using Joblib. This file contains the trained Ridge Regression model.

When a user submits house details from the frontend, the backend converts that input into the same feature format used during training. Then it scales the input using `scaler.pkl` and passes the scaled values into the loaded model.

Simple data flow:

```text
Frontend form -> Backend API -> Load scaler -> Scale input -> Load model -> Predict price -> Return response
```

## Why `scaler.pkl` Is Saved

The model was trained using scaled feature values. New user input must be scaled in the exact same way before prediction.

The scaler stores the mean and standard deviation learned from the training data. Saving it prevents training-time and prediction-time preprocessing from becoming different.

## Why The Dataset Is Not Needed After Training

The dataset is required only while training the model.

After training is finished, the useful learned information is stored in:

- `saved_models/house_price_model.pkl`
- `saved_models/scaler.pkl`

During inference, the backend does not need the full dataset. It only needs the saved model, saved scaler, and incoming user input.

## Training vs Inference

Training means learning patterns from historical housing data and saving the result.

Inference means using the saved model to predict a price for new input data.

Training is usually done by a developer or ML engineer. Inference happens inside the backend when a real user submits a prediction request.
