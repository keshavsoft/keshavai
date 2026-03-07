# KeshavAI – Voice to Text for VS Code (Windows)

KeshavAI is a **VS Code extension** that converts **spoken audio from your microphone into text** using a fully **offline speech-to-text pipeline**.

No cloud APIs or internet connection are required.

The extension uses:

* **SoX** – to capture microphone audio
* **Whisper.cpp** – to transcribe speech locally
* **Node.js (VS Code extension host)** – to control the workflow

---

# How It Works

The extension follows this pipeline:

```
Microphone
   ↓
SoX (record audio)
   ↓
voice.wav
   ↓
Whisper.cpp
   ↓
Transcribed text
   ↓
VS Code popup
```

Everything runs **locally on your machine**.

---

# Features

* Fully **offline speech recognition**
* Works directly inside **VS Code**
* No API keys required
* Uses **Whisper Tiny model** for fast transcription
* Simple command to capture speech

---

# Requirements

This extension currently supports:

```
Windows
```

The extension bundles:

```
Whisper CLI
Whisper model
SoX executable
```

So the user **does not need to install any additional software**.

---

# Project Structure

```
keshavai
│
├── Commands
│   └── voiceToText.js
│
├── helpers
│   ├── VoiceCapture.js
│   │
│   ├── sox
│   │   ├── sox.exe
│   │   └── dll files
│   │
│   ├── Release
│   │   └── whisper-cli.exe
│   │
│   └── models
│       └── ggml-tiny.en.bin
│
└── extension.js
```

---

# Running the Extension Locally

Clone the repository:

```
git clone https://github.com/keshavsoft/keshavai
```

Open the project in **Visual Studio Code**.

Run the extension:

```
F5
```

This launches the **Extension Development Host**.

---

# Using Voice to Text

Open the command palette:

```
Ctrl + Shift + P
```

Run:

```
Voice To Text
```

The extension will:

```
🎤 Record audio for 3 seconds
🧠 Transcribe speech
📄 Display the recognized text
```

Example output:

```
Hello how are you good morning
```

---

# Technologies Used

```
Node.js
VS Code Extension API
SoX
Whisper.cpp
```

---

# Limitations

* Currently supports **Windows only**
* Recording duration is **3 seconds**
* Output appears in a **popup message**

Future improvements may include:

```
Continuous listening
Insert text directly into editor
Cross-platform support
```

---

# License

This project uses:

* Whisper.cpp
* SoX

Please refer to their respective licenses.

1.1.4

voice to text perfect

1.1.5

webview started, but voice not working

1.1.6

FetchAsPost perfect 

1.1.7

Fetch modular started