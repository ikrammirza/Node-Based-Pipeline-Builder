🚀 Node-Based Pipeline Builder (React + FastAPI)








📌 Overview

This repository contains my implementation of building a scalable node-based pipeline editor using React (frontend) and FastAPI (backend).

The main objective was to design an extensible architecture that supports reusable node abstractions, dynamic UI behavior, and frontend-backend pipeline validation.

Rather than implementing isolated components, the focus of this solution was on:

scalability

maintainability

component abstraction

real-world workflow editor patterns

Inspired by node-based workflow systems similar to visual AI pipelines, LangFlow, and automation builders.



⭐ Key Features

Scalable node abstraction architecture

Dynamic handle generation from template variables

Auto-resizing node UI

DAG validation via backend integration

Modular design for rapid node creation



🧠 Architecture Highlights

✅ Node Abstraction System

Original implementation required duplicating node components for each new type.

I introduced a reusable abstraction layer:

Created a configurable base node component.

Standardized structure for:

Layout

Handles (input/output connections)

Styling

Shared logic

Enables rapid creation of new node types with minimal boilerplate.

Result:

👉 New nodes can be added through configuration instead of rewriting logic.

To demonstrate flexibility, multiple additional nodes were implemented using this abstraction.



🎨 Unified UI Styling

Designed consistent visual styling across all nodes.

Implemented scalable design system principles.

Focused on clarity, readability, and interaction usability.

Structured styling to support future expansion.

✏️ Dynamic Text Node Logic

Enhanced text node functionality with advanced interactive behavior:

Auto-resizing node dimensions based on user input.

Variable detection using template syntax:

{{ variableName }}


Automatic generation of dynamic input handles based on detected variables.

This mimics real-world workflow editors where text inputs dynamically influence pipeline structure.




🔗 Frontend ↔ Backend Pipeline Integration

Implemented full-stack integration.

Frontend

Sends graph structure (nodes + edges) to backend API.

Displays structured feedback through user alerts.

Backend (FastAPI)

Calculates:

Number of nodes

Number of edges

DAG (Directed Acyclic Graph) validation

Ensures pipeline structural correctness.




⚙️ Tech Stack

Frontend

React

JavaScript

Component abstraction patterns

Node-based UI architecture



Backend

Python

FastAPI

Graph validation logic (DAG detection)



📂 Project Structure
/frontend
  /src
    /nodes
/backend



▶️ Running Locally

Frontend

cd frontend
npm install
npm start


Backend
cd backend
uvicorn main:app --reload



🎯 Engineering Focus


This project emphasizes:

abstraction-driven design

reusable component architecture

scalable UI systems

separation of concerns between UI and processing logic



🧪 Future Improvements

Node configuration schema for dynamic generation

State management abstraction for complex workflows

Drag-and-drop performance optimizations

Graph visualization enhancements