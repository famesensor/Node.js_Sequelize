module.exports = (sequelize, type) => {
    return sequelize.define('post', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: type.STRING,
            required: true,
            allowNull: false
        },
        owner: {
            type: type.STRING,
            required: true,
            allowNull: false
        }
    })
}