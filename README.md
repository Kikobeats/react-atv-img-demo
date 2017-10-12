# react-img-atv

![Last version](https://img.shields.io/github/tag/Kikobeats/react-img-atv.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/react-img-atv/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/react-img-atv)
[![Dependency status](http://img.shields.io/david/Kikobeats/react-img-atv.svg?style=flat-square)](https://david-dm.org/Kikobeats/react-img-atv)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/react-img-atv.svg?style=flat-square)](https://david-dm.org/Kikobeats/react-img-atv#info=devDependencies)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/kikobeats)
> Apple TV 3D parallax effect as component

## Install

`npm install --save react-img-atv`

## Usage

```jsx
import AtvImg from 'react-img-atv';

<AtvImg
  layers={[
    'http://kloc.pm/images/back.png',
    'http://kloc.pm/images/front.png',
  ]}
  staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
  isStatic={false}
  className={'thisIsOptional'}
  style={{ width: 320, height: 190 }}
/>
```

## API

### props

``` jsx
static propTypes = {
  layers: PropTypes.arrayOf(PropTypes.string).isRequired,
  isStatic: PropTypes.bool,
  staticFallback: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
```

#### data

- `layers`: Required. An array of image URLs. The images will be stacked on top of each other and the _last_ element will be at the top.
- `isStatic`: Optional. A boolean value. When it evaluates to `true`, it disables the parallax effect, and shows the flattened image (`staticFallback`) instead.
- `staticFallback`: Optional. A flattened image that contains all the layers.

#### styling

Use the following options to set up the width/height of the entire component

- `className`: Optional.
- `style`: Optional.

## License

**react-img-atv** © [Kiko Beats](https://kikobeats.com), Released under the [MIT](https://github.com/Kikobeats/react-img-atv/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/react-img-atv/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/kikobeats) · Twitter [@kikobeats](https://twitter.com/kikobeats)
