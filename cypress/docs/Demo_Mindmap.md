# 🚀 Cypress Automation Framework – DemoQA (POM + Custom Commands)

## 🧠 Project Vision
> Build a scalable, reusable, and clean automation framework using Cypress  
> focusing on real-world UI scenarios like Alerts, Tables, and Navigation.

---

## 🏗️ Architecture Overview

### 📁 POM Design (Page Object Model)
- Home_Page.js → Landing validations & navigation
- Alerts_Page.js → Alert handling logic
- Web_table.js → Table operations (Read + CRUD)

👉 Separation of concerns → Clean + Maintainable code

---

## ⚙️ Core Automation Flow

### 🏠 Home Page
- Visit application
- Validate UI elements (banner, categories)
- Verify category names dynamically
- Validate all navigation links (API status check)

💡 Real-world skill: Broken link detection

---

### 🚨 Alerts Module
- Handle Simple Alert
- Handle Delayed Alert (async behavior)
- Handle Confirm Box
- Handle Prompt Input

💡 Key Concept:
- Event handling (`window:alert`, `confirm`)
- Stubbing (`prompt`)

---

### 📊 Web Tables Module

#### 🔍 Data Reading
- Count rows & columns (custom command)
- Validate table headers
- Iterate rows & extract data dynamically

#### ✏️ CRUD Operations
- Add multiple users (Fixture-driven)
- Edit existing records
- Delete records

💡 Real-world skill:
- Dynamic table handling
- Data-driven testing

---

## 🔄 Custom Commands (Reusability Engine)

- `verifycatogory()` → UI validation
- `Verifylinkstatus()` → API + UI hybrid testing
- `handleAlert()` → Alert handling
- `handleconfirm()` → Confirm box handling
- `handlePrompt()` → Prompt input handling
- `Fillform()` → Reusable form automation
- `countrowandcol()` → Table metrics
- `verifyheading()` → Header validation
- `Printingdata()` → Data extraction

👉 Result:
- Less duplication
- Cleaner tests
- Scalable framework

---

## 📦 Data Management

### 📁 Fixtures
- External JSON data (multiple users)
- Used for form filling in Web Tables

💡 Benefit:
- Data-driven testing
- Easy scalability

---

## 🧪 Test Design Strategy

### ✔️ Modular Tests
- Separate test files per feature

### ✔️ Reusability
- Commands + POM

### ✔️ Readability
- Clean and minimal test files

---

## 📸 Debugging & Reporting
- Screenshots on key actions
- Cypress logs for visibility

---

---

## 🎯 Key Learnings

- Cypress async handling
- DOM traversal & iteration
- Custom command design
- API + UI hybrid testing
- Data-driven automation

---

## 💼 Outcome

✅ Production-ready automation framework  
✅ Scalable & maintainable structure  
✅ Covers real-world UI challenges  
  

---

## 🚀 Final Thought

> “Automation is not just writing tests, it's building systems that test themselves efficiently.”
