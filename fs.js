
const fs = require("fs");

const writeJson = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile('employees.json', '{"name":"Employee1Name","salary":2000}', (err) => {
            if (err) reject("hata oluştu");
            resolve("başarılı");
        })
    }
    )
};

const readJSon = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('employees.json', 'utf-8', (err, data) => {
            if (err) reject("hata oluştu");
            resolve("başarılı");
        });
    })
};

const updateJson = () => {
    return new Promise((resolve, reject) => {

        fs.writeFile('employees.json', '{"name":"Employees1Name","salary":5000}', (err) => {
            if (err) reject("hata oluştu");
            resolve("başarılı");
        })
    })
};
async function deleteJson () {
    try {
        let waited = await writeJson();
        let readed = await readJSon();
        let updated = await updateJson();

        fs.unlink('employees.json', (err) => {
            if (err) console.log(err);
        });

    }
    catch (err) {
        console.log(err);

    }
};

deleteJson();
