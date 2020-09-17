# Instructions

We’d like you to build a chat app (similar to ​this design​) that walks users through a pre-defined onboarding flow.
Your app should fetch ​this JSON file​ for the onboarding questions. Each question has three key parts: the question itself, the validation rules, and the proceeding paths.
Question:​ For each question, the app should prompt the user with a question, in chat, and await a valid response. Behavior for invalid responses is undefined by design -- you should define it.
Validation:​ A boolean validation rule means validation will always resolve to that value. An array means that a limited set of (case-insensitive) options are valid. A string means that the value should be used as a regex to validate the response.
Paths:​ When this value is missing, it represents an end state. When the value is a number, that number is the ID of the question the app should proceed to once a valid input has been given. When the value is an object, the keys are valid responses and the values are the next-question IDs.

# How to run

1. git clone git@bitbucket.org/cerebral.git
2. cd cerebral folder
3. npm install
4. npm run ios
