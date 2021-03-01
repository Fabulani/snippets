# Snippets+

Django-Rest-Framework tutorial project "Snippets" with some bonus stuff. I use this project to try out new things. For example, using MongoDB as the database, and then dockerizing my project with Docker.

# Table of contents
- [Snippets+](#snippets)
- [Table of contents](#table-of-contents)
- [Requirements](#requirements)
- [Run the entire project with Docker:](#run-the-entire-project-with-docker)
- [Backend w/o Docker:](#backend-wo-docker)
- [Frontend w/o Docker:](#frontend-wo-docker)

# Requirements
- Python 3
- MongoDB
- Docker (optional)


# Run the entire project with Docker:

1. Open ``./backend/snippets_project/settings.py`` and change ``DATABASES`` to:
   
    ``DATABASES = databases_dockerized``

2. Execute:
   
    ``docker-compose up -d --build``

3. To create a superuser, follow these steps:
    1. `docker ps`
    2. Copy the ID of the container called "backend" (or with `IMAGE` called `snippets_backend`).
    3. Replace ``CONTAINER_ID`` with the ID copied in Step 2 and execute:
    ```
    docker exec -it CONTAINER_ID python manage.py createsuperuser 
    ```

    Or, with Docker Desktop, go to ``Containers/Apps``, click on the dropdown arrow for the `snippets` container, on the ``backend`` service click on the CLI icon ( >_ ) and execute:

    ```
    python ./scenario_analysis/api/manage.py createsuperuser
    ```


4. Next time, just execute:
    ```
    docker-compose up -d --build
    ```

    and everything should be working fine.

5. To shutdown the containers, execute:
    ```
    docker-compose down
    ```

    And if you want to delete the container's data and database, include the ``-v`` flag (deletes Docker volumes).



# Backend w/o Docker:

1. Open ``backend/snippets_project/settings.py`` and change ``DATABASES`` to:
   
    ``DATABASES = databases_localhost``

2. Be sure to have your local MongoDB database running (``mongod``).

3. Migrate the local MongoDB database:

    ``python ./backend/manage.py migrate``

4. Create a superuser:

    ``python ./backend/manage.py createsuperuser``

5. Run the backend server (localhost at http://127.0.0.1:8000/):

    ``python ./backend/manage.py runserver``

6. Access http://127.0.0.1:8000/ and you should see a page titled "Api Root".

And that's it. This is a one-time setup, so next time you'd like to run the server, just execute 

    python ./backend/manage.py runserver


# Frontend w/o Docker:

1. `cd frontend`
2. `yarn start`.
3. 