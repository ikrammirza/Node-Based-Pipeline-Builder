# 🚀 Node-Based Pipeline Builder (React + FastAPI)

<br/>

An extensible, architecture-driven pipeline editor designed for scalability. This project implements a modular node system with dynamic UI updates and a robust FastAPI backend for structural validation.

---

## 📌 Overview

This repository focuses on building a **scalable node-based pipeline editor**. Unlike traditional implementations that rely on isolated, hard-coded components, this solution utilizes a reusable abstraction layer inspired by industry-standard workflow systems like **LangFlow** and **AI automation builders**.

### 🛠️ Core Objectives
* **Scalability:** Logic that handles increasing graph complexity.
* **Maintainability:** Clean separation of concerns between UI and state.
* **Abstraction:** Drastically reduced boilerplate for new node types.
* **Real-world Patterns:** Industry-standard DAG (Directed Acyclic Graph) validation.

---

## ⭐ Key Features

* 🧩 **Scalable Node Abstraction:** Unified architecture for all node types.
* ⚡ **Dynamic Handle Generation:** Automatic creation of ports from `{{ variable }}` syntax.
* ↔️ **Auto-Resizing UI:** Nodes that adapt dimensions based on content.
* ✅ **DAG Validation:** Integrated backend checks to prevent infinite loops.
* 📦 **Modular Design:** Rapid creation of new nodes through simple configuration.

---

## 🧠 Architecture Highlights



### ✅ Node Abstraction System
I replaced redundant component duplication with a **Configurable Base Node** layer. This standardizes:
* **Layout & Styling:** Consistent visual language across the board.
* **Handles:** Centralized management of input/output connections.
* **Shared Logic:** Common behaviors (drag, click, edit) are inherited.

> **Result:** New node types can now be added via configuration instead of rewriting foundational logic.

<br/>

### ✏️ Dynamic Text Node Logic
Implements advanced interactive behavior mimicking real-world logic editors:
* **Variable Detection:** Real-time parsing of `{{ variableName }}`.
* **Dynamic Ports:** Input handles are generated on-the-fly as variables are typed.
* **Fluid UI:** The node container auto-adjusts to fit user-provided content.

<br/>

### 🔗 Frontend ↔ Backend Integration
* **Frontend:** Captures and serializes the graph structure (Nodes + Edges).
* **Backend (FastAPI):** Validates the graph integrity, providing counts and verifying the **DAG structure** to ensure the pipeline is executable.

---

## ⚙️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React, JavaScript, Node-based UI architecture |
| **Backend** | Python, FastAPI, Graph validation logic |
| **Styling** | Scalable Design System principles |

---
## 📂 Project Structure

* bash
* ├── /frontend
* │   └── /src
* │       └── /nodes    # Abstraction layer & node components
* └── /backend          # FastAPI logic & DAG validation
----

## ▶️ Running Locally

### 💻 Frontend
* **Navigate to the frontend directory:**
  ```bash
  cd frontend
  npm install
  npm start


  🐍 Backend
  Bash
  cd backend
  uvicorn main:app --reload


## 🎯 Engineering Focus

* **🏗️ Abstraction-Driven Design:** Focusing on "DRY" (Don't Repeat Yourself) principles to minimize boilerplate and improve scalability.
* **📈 UI Scalability:** Ensuring the architecture and rendering logic handle complex, large-scale workflows efficiently.
* **🛡️ Separation of Concerns:** Maintaining clearly defined boundaries between the UI components and the backend processing logic.

---

## 🧪 Future Improvements

* **🚀 Node Configuration Schema:** Implementation of a JSON-based schema for fully dynamic node generation.
* **🧠 State Management:** Abstracting workflows for complex data handling using specialized state libraries like Zustand or Redux.
* **⚡ Performance:** Advanced drag-and-drop optimizations and canvas virtualization for 100+ node graphs.
* **📊 Visualization:** Adding auto-layout algorithms (such as Dagre or ElkJS) to help organize messy pipelines automatically.

---
