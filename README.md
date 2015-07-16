# Cinch

A simple, pure, and efficient CSS micro-framework.

## Contributing
Cinch uses gulp to build and pre-process CSS using Myth. When developing new features, run:

```bash
npm install
gulp
```

The documentation website is statically generated using [Punch](http://laktek.github.io/punch/). To view the website as you are developing, run:
```bash
cd site
punch server
```

When it comes time to generate the pages and push them to Github, run:
```bash
cd site
punch generate
cd ..
gulp deploy
```
