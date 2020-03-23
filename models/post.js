module.exports = (sequelize, type) => {
    return sequelize.define('post', {
        id: {
            type: type.UUID,
            primaryKey: true,
            defaultValue: type.UUIDV4,
        },
        text: {
            type: type.STRING,
            required: true,
            allowNull: false
        },
        userId: {
            type: type.UUID,
            required: true,
            allowNull: false
        }
    })
}