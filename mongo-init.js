// File used for initializing the container's MongoDB Database.

db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [
            {
                role: "readWrite",
                db: "snippets_db"
            }
        ]
    }
);
