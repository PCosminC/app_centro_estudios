import { db } from "../config.js";
export function saveSchool(req, res) {
    const queryString = `INSERT INTO School(name) VALUES ("${req.body.name}")`;
    db.query(queryString, (error, result) => {
        if (error) {
            res.send("No se pudo hacer el insert");
        }
        res.send("El insert se hizo correctamente");
    });
    //res.send(req.body);
}
