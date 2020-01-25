# Career Portal Backend Part 2

> This is the second part of the serverless backend

- This is the second part of the backend for the Career Portal Application. An app, which allows graduates of an institution
  to connect, create a profile with all their credentials and information, communicate with each other and find their dream job.

---

## Table of Contents (Optional)

> If your `README` has a lot of info, section headers might be nice.

- [Installation](#installation)
- [Use Services](#services)
- [Functions](#functions)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

`npm i -g serverless`

### Clone

`git clone https://github.com/gerasimosgakis/teithe-career-portal-api-part-2.git`

### Setup

```bash
# Change into the api directory
cd teithe-career-portal-api-part-2
# Install packages
npm install
```

## <a name="services"></a>Use Services

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

## Functions

These are all the currently available services

- **Add Post** - _method_: POST, _path_: /posts, _body_: data object
- **Delete Post** - _method_: DELETE, _path_: /posts/{id}
- **List Posts** - _method_: GET, _path_: /posts
- **Add/Remove Like** - _method_: POST, _path_: /likes, _body_: data object (user_id, post_id)
- **Add Comment** - _method_: POST, _path_: /comments, _body_: data object
- **Delete Comment** - _method_: DELETE, _path_: /comments/delete{id}
- **Get Comments By Post** - _method_: GET, _path_: /comments/{postid}
- **Add Internal Job Post** - _method_: POST, _path_: /job-posts, _body_: data object
- **List Job Posts** - _method_: GET, _path_: /job-posts
- **Get Job Posts By User ID** - _method_: GET, _path_: /job-posts/{userid}
- **Update Internal Job** - _method_: POST, _path_: /job-posts/update/{jobid}, _body_: data object
- **Search Jobs** - _method_: POST, _path_: /job-posts/search, _body_: parameters object (title, location, min_salary, max_salary, permanent, temp, contract, full_time, part_time)
- **Delete Job Post** - _method_: DELETE, _path_: /job-posts/delete/{id}

## Contributing

> To get started...

### Step 1

- **Option 1**

  - 🍴 Fork this repo!

- **Option 2**
  - 👯 Clone this repo to your local machine using `https://github.com/gerasimosgakis/teithe-career-portal-api-part-2.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/gerasimosgakis/teithe-career-portal-api-part-2/compare" target="_blank">`https://github.com/gerasimosgakis/teithe-career-portal-api-part-2/compare`</a>.

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://gerasimosgakis.com" target="_blank">Gerasimos Gakis</a>.
