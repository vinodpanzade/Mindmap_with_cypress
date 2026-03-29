# 🚀 Cypress Automation Framework – DemoQA

## 🌟 Overview

This project is a **scalable Cypress automation framework** built using **Page Object Model (POM)** and **Custom Commands**, designed to handle real-world UI testing scenarios like alerts, dynamic tables, and navigation flows.

It focuses on **clean architecture, reusability, and maintainability**, mimicking industry-level automation practices.

---

## 🧠 Key Highlights

* 📌 **POM-Based Architecture** → Separation of concerns for better scalability
* 🔁 **Custom Commands** → Reusable logic for cleaner test cases
* 📊 **Dynamic Table Handling** → Reading, validating & iterating data
* 🚨 **Alert Handling** → Covers alert, confirm, and prompt scenarios
* 📦 **Fixture-Based Data** → Data-driven testing approach
* 🎯 **Real-World Scenarios** → CRUD operations, link validation, UI checks

---

## 🏗️ Project Structure

```
cypress/
 ├── e2e/
 │   ├── alerts.cy.js
 │   ├── homepage.cy.js
 │   └── webtable.cy.js
 │
 ├── support/
 │   └── Pages/
 │       ├── Home_Page.js
 │       ├── Alerts_Page.js
 │       └── Web_table.js
 │
 ├── fixtures/
 │   └── Fix.json
 │
 └── docs/
     └── Demo_Mindmap.md
```

---

## 🧩 Modules Covered

### 🏠 Home Page

* UI validation (banner & categories)
* Dynamic category verification
* Link validation using API calls

---

### 🚨 Alerts Handling

* Simple Alert
* Delayed Alert
* Confirm Box
* Prompt Input

---

### 📊 Web Tables

#### 🔍 Data Reading

* Count rows & columns
* Validate table headers
* Extract dynamic table data

#### ✏️ CRUD Operations

* Add records using fixture data
* Edit existing records
* Delete records

---

## 🔄 Custom Commands

Reusable commands created to improve efficiency:

* `verifycatogory()`
* `Verifylinkstatus()`
* `handleAlert()`
* `handleconfirm()`
* `handlePrompt()`
* `Fillform()`
* `countrowandcol()`
* `verifyheading()`
* `Printingdata()`

---

## 📦 Data-Driven Testing

* External test data stored in fixtures
* Multiple users handled dynamically
* Scalable test design

---

## 🎯 Why This Project Stands Out

* Clean and **industry-level framework design**
* Focus on **reusability and maintainability**
* Covers **real automation challenges**
* Demonstrates **strong Cypress fundamentals**
* Includes a **visual mind map** for better understanding

---

## 🧠 Mind Map

A structured visual representation of the project is available here:
📄 `cypress/docs/Demo_Mindmap.md`

---

## 💼 Skills Demonstrated

* Cypress Automation
* JavaScript (ES6+)
* DOM Handling & Traversal
* Data-Driven Testing
* Test Design & Architecture

---

## 🚀 Getting Started

```bash
git clone <your-repo-link>
cd <project-folder>
npm install
npx cypress open
```

---




## ✨ Final Thought

> “Good automation is not just about writing tests, it's about building systems that are scalable, maintainable, and reliable.”

---
