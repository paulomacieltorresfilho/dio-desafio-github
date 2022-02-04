import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getQuote } from './quotesService';

const response = { test: 'testing' };

const server = setupServer(
    rest.get('http://127.0.0.1:5000', (req, res, ctx) => {
        return res(ctx.json(reponse));
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('transform json response into object', async () => {
    const quote = await getQuote();
    expect(quote).toStrictEqual(response);
});