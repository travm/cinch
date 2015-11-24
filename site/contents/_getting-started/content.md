## Getting Started

<div class="grd">
    <div class="row">
        <div class="col-4">
            <p>
                Cinch is a CSS micro-framework designed to get your project <em>started</em> on the right track. As your project matures, your CSS should grow and adapt to your project's needs. Cinch is not a library of CSS classes, it is a solid foundation intended to grow with your project and keep it organized, clean, and efficient.
            </p>
        </div>
        <div class="col-2">
            <div class="box text-center">
                <a href="https://raw.githubusercontent.com/travm/cinch/master/dist/cinch.css" class="btn btn-round" target="_blank">Download Cinch</a>
                <p class="m0">8.8k Unminified</p>
            </div>
        </div>
    </div>
</div>

### Requirements
Cinch is built with cutting edge CSS features such as variables and color manipulation that are still being finalized in the official spec. Until they are completed, Cinch requires a pre-processor that can "translate" those features to code that a browser can understand today.

The great benefit of writing future-friendly, spec-compliant code is that as these features are finalized, you will be able to remove the processor altogether and your code can be read natively in the browser instead.

We recommend <a href="http://myth.io">Myth</a> to handle your pre-processing and we'll show you how to get everything up and running.

#### Installing Myth

```bash
npm install -g myth
```

#### Using Myth
If you are familiar with similar pre-processors such as Sass or Less, then you'll have no trouble with Myth. Here is a basic example of how you can get started.

```bash
myth input.css output.css -c -w
```

This code specifies the input and output files, and additionally instructs Myth to compress the output and watch for any future changes. Keeping it running and listening for changes will keep you from having to run the same command every time you make a change. To get the process to stop, press `Ctrl + C`.
