
# load-image

  load an image asynchronously, promised.
  also works in node with node-canvas.

## Installation

    $ npm install load-image

  or

    $ component install nathan7/load-image

## API

### loadImage(src)

  Load an image from the given source. Returns a promise.
  src can be anything Image#src accepts or a promise for it (which is resolved at loading-time)

### loadImage.lazily(src)

  Lazily load the given image (returns a [lazy promise](https://github.com/then/lazy-promise))
   

## License

  MIT
