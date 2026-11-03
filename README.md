# PyMind — Python Knowledge Arena

A responsive Python MCQ quiz website with 20 questions, four difficulty levels, code-output prediction, instant feedback, reveal-answer mode, explanations, score and accuracy tracking.

## Run locally
Open `index.html` in any modern browser. Or run:
```bash
python -m http.server 8000
```
Visit `http://localhost:8000`.

## GitHub Pages
1. Create a repository such as `pymind-python-quiz`.
2. Upload `index.html`, `style.css`, `questions.js`, and `script.js` to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Add questions
Edit `questions.js`. Each question is an object with `id`, `level`, `topic`, `question`, `code`, `options`, `answer` and `explanation`. `answer` is zero-based: 0=A, 1=B, 2=C, 3=D. Provide exactly four options and unique IDs.

No backend, framework, or external JavaScript packages required.
