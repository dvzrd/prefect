const user = require("./user")
// @ponicode
describe("user.getUsers", () => {
    test("0", async () => {
        await user.getUsers({ body: true }, " ")
    })

    test("1", async () => {
        await user.getUsers({ body: false }, " ")
    })

    test("2", async () => {
        await user.getUsers(undefined, undefined)
    })
})

// @ponicode
describe("user.deleteUser", () => {
    test("0", async () => {
        await user.deleteUser({ id: 12345, params: "https://croplands.org/app/a/reset?token=" }, " ")
    })

    test("1", async () => {
        await user.deleteUser({ id: "a1969970175", params: "https://croplands.org/app/a/confirm?t=" }, " ")
    })

    test("2", async () => {
        await user.deleteUser({ id: 56784, params: "http://base.com" }, " ")
    })

    test("3", async () => {
        await user.deleteUser({ id: 12345, params: "https://croplands.org/app/a/confirm?t=" }, " ")
    })

    test("4", async () => {
        await user.deleteUser({ id: "bc23a9d531064583ace8f67dad60f6bb", params: "https://accounts.google.com/o/oauth2/revoke?token=%s" }, " ")
    })

    test("5", async () => {
        await user.deleteUser({ id: -Infinity, params: "" }, undefined)
    })
})
