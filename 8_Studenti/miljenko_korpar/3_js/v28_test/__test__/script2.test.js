// service used by function under tests
const userService = {
    getUser: (id) => {
        return { 
            id: id,
            name: "Real user"
        }
    }
}

// function under test
function greatUser(id, service) {
    const user = service.getUser(id);
    if (!user) {
        return "User not found.";
    }
    return `Hello, ${user.name}.`;
}

// tests
test("User exists", () => {
    const mockedUserService = {
        getUser: jest.fn().mockReturnValue({
            id: 1, 
            name: "Mocked user"
        })
    };

    const result = greatUser(1, mockedUserService);

    expect(result).toBe("Hello, Mocked user.")
})

test("User does not exist", () => {
    const mockedUserService = {
        getUser: jest.fn().mockReturnValue(null)
    };

    const result = greatUser(1, mockedUserService);

    expect(result).toBe("User not found.")
})