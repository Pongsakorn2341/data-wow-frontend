<a name="readme-top"></a>


<br />
<div align="center">
  <h3 align="center">Datawow Blog for Test</h3>

  <p align="center">
   This project is a robust blog posting and commenting platform designed to provide a seamless user experience for creating, reading, and interacting with blog posts. The application leverages the modern web development frameworks Next.js and NestJS, ensuring a performant and scalable architecture. Authentication and authorization are handled using JSON Web Tokens (JWT), providing secure access to the platform's features.
    <br />
  </p>
</div>



### Built With

* Next.js 14: Utilized the latest App Router for optimized routing and improved performance.
* Tailwind CSS: For crafting a highly responsive and visually appealing user interface.
* Shadcn/UI: Leveraged Shadcn/UI components for a consistent and polished UI/UX.
* TypeScript: Ensuring type safety and enhanced developer experience.
* PrismaORM: Powerful ORM for database interactions.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Feature
* User Authentication: Secure login and signup functionality to protect your data.
* Create and Edit Blogs: Authenticated users can create and edit blog posts using a rich text editor..
* Dashboard: Users have a personal dashboard to manage their blog posts, view engagement metrics, and make updates.
* Post Comments: Authenticated users can post comments on blog posts, with support for nested comments (replies).
* Comment Moderation: Blog authors can moderate comments on their posts, including deleting inappropriate comments.
* Cross-Device Compatibility: The platform is fully responsive, ensuring a seamless user experience on desktops, tablets, and mobile phones.


## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* Node.js 20.* and above
* Yarn - [Download & Install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable). Yarn package manager.

### A typical top-level directory layout

    .
    ├── ...
    ├── datawow-blog                    # Your project directory
    │   ├── datawow-frontend         # clone and installation frontend
    │   ├────── .env                         # Your Frontend environments
    │   ├── datawow-backend         # clone and installation backend
    │   ├────── .env                         # Your Backend environments
    │   └── docker-compose.yml          # docker file for start web application (Optional)
    └── ...

## Getting Start

### Installation

1. Clone the repository.
```bash
$ mkdir datawow-blog
$ cd datawow-blog
$ git clone https://github.com/Pongsakorn2341/data-wow-frontend.git
$ git clone https://github.com/Pongsakorn2341/data-wow-backend.git
```

2. Install the dependencies
```bash
$ yarn install
```

3. Setup ENV

> Use your own env or retrive it from ".env.example"

* ENV for development
```
NEXTAUTH_URL=http://localhost:3000

# Generate from `openssl rand -base64 32`
NEXTAUTH_SECRET=

NEXT_PUBLIC_BACKEND_URL=http://localhost:4444/api/v1
```


### Running the Application

1. Start development
```bash
$ pnpm dev
```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Building for Production

```bash
$ pnpm build
$ pnpm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Docker Compose file

```yml
version: "3"
services:
  frontend:
    build:
      context: data-wow-frontend/
    ports:
      - "3000:3000"
    depends_on:
      - backend
      - db
    networks:
      - app-network

  backend:
    build:
      context: data-wow-backend/
    ports:
      - "4444:4444"
    depends_on:
      db:
        condition: service_healthy
    networks:
      - app-network
    restart: always

  db:
    image: postgres:13
    container_name: data-wow_postgres_db
    environment:
      POSTGRES_USER: tottee-user                # Your database username
      POSTGRES_PASSWORD: tottee-password        # Your database password
      POSTGRES_DB: develop                      # Your database name
    volumes:
      - pg_db_data:/var/lib/postgresql/data-wow-data
    ports:
      - "5432:5432"
    networks:
      - app-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U tottee-user -d develop"]   # Your database username and database name
      interval: 10s
      timeout: 30s
      retries: 5

networks:
  app-network:
    driver: bridge

volumes:
  pg_db_data:


```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



# Start Application with docker compose

After finished package installation and setup env configuration files you can run command at directory that have a docker-compose.yml file

```bash
$ cd datawow-blog
$ docker compose up -d
```


## Contact

Pongsakorn Parsoppornpiboon - pongsakorn.psb@gmail.com
<br />
Github : https://github.com/Pongsakorn2341

<p align="right">(<a href="#readme-top">back to top</a>)</p>
