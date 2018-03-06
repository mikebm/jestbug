const mockPromise = {
    then: jest.fn(() => mockPromise),
    catch: jest.fn(() => mockPromise)
};

module.exports = mockPromise;