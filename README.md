# Team Mercury's InStock Back End API

### Basic set-up

Please use `apiConfig.json.sample` as reference for building up your `apiConfig.json` file locally. Make sure you provide the same `API_KEY` in your `.env` file as the one used for your Back End application:

```
const { data } = await axios.get("http://localhost:17000/warehouse/1?api_key=623e1539-987f-4b99-8267-2759c25d312f);
```

You can use an [online UUID generator](https://www.uuidgenerator.net/version4) to set-up a mock API key.

We can't use `dotenv` as [per the issues described in here](https://github.com/facebook/create-react-app/issues/11756#issuecomment-996464456)

### Dependencies

To help us build the app faster, we've used a couple of modules:

- [react-hook-form](https://react-hook-form.com/) - Form validation library
- [react-select](https://react-select.com/) - Custom select element styling
