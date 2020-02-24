const skills = [
    // {skill: 'javascript', learned: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(skill, id) {
    skills.splice(id, 1, skill);
}

function deleteOne(id) {
    skills.splice(id);
}

function create(skill) {
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}