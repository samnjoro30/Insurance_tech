import json
import random
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

with open('../Data/message.json', "r") as f:
    messages = json.load(f)

    sentences = []
    labels = []

    for message in messages["message"]:
        for pattern in message["patterns"]:
            sentences.append(pattern)
            labels.append(message["tag"])

vectorizer = TfidfVectorizer()
x = vectorizer.fit_transform(sentences)

model = LogisticRegression()
model.fit(x, labels)

# Save
with open("../models/message.pkl", "wb") as f:
    pickle.dump(model, f)

with open("../models/tfidf_vectorizer.pkl", "wb") as f:
    pickle.dump(vectorizer, f)

print("✅ Model trained and saved.")