# Form Validation

This project demonstrates a simple form validation using HTML, CSS, and JavaScript. The form collects user information including username, email, password, and confirms the password while also ensuring the user agrees to the terms and conditions.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Demo

You can view the live demo of the form validation [here](https://github.com/Sanjana741/Form-Validation).

## Features

- Username validation (minimum 3 characters)
- Email validation (must be a valid email format)
- Password validation (minimum 8 characters)
- Confirm password validation (must match the password)
- Terms and conditions checkbox validation

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get a local copy up and running, follow these simple steps:

1. **Clone the repo**

```sh
git clone https://github.com/Sanjana741/Form-Validation.git
```

2. **Open the project directory**

```sh
cd Form-Validation
```

3. **Open `index.html` in your browser**

```sh
open index.html
```

## Usage

Upon opening `index.html`, you'll see a registration form with the following fields:

- **Username**: Must be at least 3 characters long.
- **Email**: Must be a valid email address.
- **Password**: Must be at least 8 characters long.
- **Confirm Password**: Must match the password.
- **Terms and Conditions**: Must be checked to proceed.

When you submit the form, the JavaScript validation script will check each field and display error messages for invalid inputs. If all inputs are valid, the form will redirect to `index.html` (this can be customized as needed).

