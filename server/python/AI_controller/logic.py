import random
import json
import pickle
import os
import pathlib

SCRIPT_DIR = pathlib.Path(__file__).parent.resolve()

model_path = os.path.join(SCRIPT_DIR, "../models/message.pkl")
vectorizer_path = os.path.join(SCRIPT_DIR, "../models/tfidf_vectorizer.pkl")
messages_path = os.path.join(SCRIPT_DIR, "../Data/message.json")

with open(model_path, "rb") as f:
    model = pickle.load(f)

with open(vectorizer_path, "rb") as f:
    vectorizer = pickle.load(f)

with open(messages_path, "r") as f:
    messages = json.load(f)


def get_response(user_input: str):
    X = vectorizer.transform([user_input])
    message1 = model.predict(x)[0]

    for i in messages["message"]:
        if i["tag"] == message1:
            return random.choice(i["responses"])

    return "sorry, I did not get that right"