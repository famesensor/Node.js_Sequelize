module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.UUID,
            primaryKey: true,
            defaultValue: type.UUIDV4,
        },
        fname: {
            type: type.STRING,
            required: true,
            allowNull: false
        },
        lname: {
            type: type.STRING,
            required: true,
            allowNull: false
        }
    })
}