# Career Portal Backend Part 2

> This is the second part of the serverless backend

- This is the second part of the backend for the Career Portal Application. An app, which allows graduates of an institution
to connect, create a profile with all their credentials and information, communicate with each other and find their dream job.

---

## Table of Contents (Optional)

> If your `README` has a lot of info, section headers might be nice.

- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [Team](#team)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)


---

## Installation

```npm i -g serverless```

### Clone

```git clone https://github.com/gerasimosgakis/teithe-career-portal-api-part-2.git```

### Setup

```bash
# Change into the api directory
cd teithe-career-portal-api-part-2
# Install packages
npm install
```
### Use Services
1. **Run all the services offline**
```bash
# Run serverless offline
serverless offline
```

2. **Deploy the Service:**

Use this when you have made changes to your Functions, Events or Resources in `serverless.yml` or you simply want to deploy all changes within your Service at the same time.

```bash
serverless deploy -v
```

3. **Deploy a Function:**

Use this to quickly upload and overwrite your AWS Lambda code on AWS, allowing you to develop faster.

```bash
serverless deploy function -f hello
```

4. **Invoke the Function on AWS:**

Invokes an AWS Lambda Function on AWS and returns logs.

```bash
serverless invoke -f hello -l
```

5. **Invoke the Function on your machine:**

Invokes an AWS Lambda Function on your local machine and returns logs.

```bash
serverless invoke local -f hello -l
```

8. **Fetch the Function Logs:**

Open up a separate tab in your console and stream all logs for a specific Function using this command.

```bash
serverless logs -f hello -t
```

9. **Remove the Service:**

Removes all Functions, Events and Resources from your AWS account.

```bash
serverless remove
```

### Functions

These are all the currently available services

- **Add Post** - *method*: POST, *path*: /posts, *body*: data object
- **Delete Post** - *method*: DELETE, *path*: /posts/{id}
- **List Posts** - *method*: GET, *path*: /posts
- **Add/Remove Like** - *method*: POST, *path*: /likes, *body*: data object (user_id, post_id)
- **Add Comment** - *method*: POST, *path*: /comments, *body*: data object
- **Delete Comment** - *method*: DELETE, *path*: /comments/delete{id}
- **Get Comments By Post** - *method*: GET, *path*: /comments/{postid}
- **Add Internal Job Post** - *method*: POST, *path*: /job-posts, *body*: data object
- **List Job Posts** - *method*: GET, *path*: /job-posts
- **Get Job Posts By User ID** - *method*: GET, *path*: /job-posts/{userid}
- **Update Internal Job** - *method*: POST, *path*: /job-posts/update/{jobid}, *body*: data object
- **Search Jobs** - *method*: POST, *path*: /job-posts/search, *body*: parameters object (title, location, min_salary, max_salary, permanent, temp, contract, full_time, part_time)
- **Delete Job Post** - *method*: DELETE, *path*: /job-posts/delete/{id}

**Note**: the `serverless install` command will only work on V1.0 or later.
---

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/joanaz/HireDot2.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/joanaz/HireDot2/compare/" target="_blank">`https://github.com/joanaz/HireDot2/compare/`</a>.
---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://gerasimosgakis.com" target="_blank">Gerasimos Gakis</a>.
