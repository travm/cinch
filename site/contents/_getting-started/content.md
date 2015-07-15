## Getting Started
Cinch is a CSS micro-framework designed to get your project _started_ on the right track. As your project matures, your CSS should grow and adapt to your projects needs. Cinch is not a library of CSS classes, it is a solid foundation intended to grow with your project and keep it organized, clean, and efficient.

<div class="grd">
    <div class="row">
        <div class="col col-3 is-px2">
            <h3>Boilerplate</h3>
            <p>The boilerplate is the unminfied source that can be used as a base for your next project. If you like what you've see, then it's time to get started!</p>
            <a class="btn-round" href="#">Download Boilerplate</a>
        </div>
        <div class="col col-3">
            <h3>Library</h3>
            <p>While this is not recommended, you can also use Cinch like a more traditional framework that you build on top of. This file comes fully minified and pre-processed.</p>
            <a class="btn-round" href="#">Download Library </a>
        </div>
    </div>
</div>

### Requirements
Cinch is built with cutting edge CSS features such as variables and color manipulation that are still being finalized in the official spec. Until they are completed, Cinch requires a pre-processor that can "translate" those features to code that a browser can understand today. The great benefit of writing future spec-compliant code is that as these features are finalized, you will be able to remove the processor altogether and your code can be read natively in the browser instead.

We recommend <a href="http://myth.io">Myth</a> to handle your pre-processing and we'll show you how to get everything up and running.

#### Installing Myth

```bash
npm install -g myth
```

#### Using Myth
If you are familiar with similar pre-processors such as Sass or Less, then you'll have no trouble with Myth. Here are some basic examples of how you can get started using Myth.

```bash
myth input.css output.css -c -w
```

This code specifies the input and output files, and additionally instructs Myth to compress the output and watch for any future changes to our input.
