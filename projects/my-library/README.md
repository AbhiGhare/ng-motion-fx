# Ng Motion FX

Ng Motion FX is a simple and customizable Angular animation library designed to enhance your application with dynamic and reusable animations. It is lightweight, efficient, and perfect for adding animations with minimal effort.

---

## Key Features

- **Simple Setup**: Quickly integrate animations into your Angular app.
- **Customizable Animations**: Adjust duration, easing, and transforms to fit your needs.
- **Dynamic Inputs**: Fully supports dynamic animation parameters.
- **Lightweight**: Minimal impact on performance.

---

## Installation

Install the library using npm:

```bash
npm install ng-motion-fx
```

### Prerequisites

- Angular version `>=11.0.0`.
- Import `BrowserAnimationsModule` in your project.

---

## Version Support

| Angular Version | Supported? |
|-----------------|------------|
| 11.x            | ✅         |
| 12.x            | ✅         |
| 13.x            | ✅         |
| 14.x            | ✅         |
| 15.x            | ✅         |
| 16.x            | ✅         |

---

## Quick Start Guide

### Step 1: Import the Module

Add the `NgMotionFXModule` to your app module:

```typescript
import { NgMotionFXModule } from 'ng-motion-fx';

@NgModule({
  imports: [
    BrowserAnimationsModule, // Required for Angular animations
    NgMotionFXModule
  ]
})
export class AppModule {}
```

### Step 2: Use in Your Template

Wrap your content with the `NgMotionComponent` to apply animations:

```html
<ng-motion
  [duration]="'1s'"
  [easing]="'ease-in-out'"
  [startTransform]="'translateY(-50%)'"
  [endTransform]="'translateY(0)'"
>
  <div class="animated-content">
    Animated Content Goes Here
  </div>
</ng-motion>
```

---

## Customization Options

| Input            | Type     | Default Value         | Description                                          |
| ---------------- | -------- | --------------------- | ---------------------------------------------------- |
| `duration`       | `string` | `'500ms'`             | Duration of the animation. Use values like `500ms` or `2s`. |
| `easing`         | `string` | `'ease-out'`          | Easing function for smooth transitions.              |
| `startTransform` | `string` | `'translateX(-100%)'` | Starting CSS transform for the animation.            |
| `endTransform`   | `string` | `'translateX(0)'`     | Ending CSS transform for the animation.              |

---

## Variations

Here are some examples of animations you can create with Ng Motion FX:

### Slide In from Left

```html
<ng-motion
  [duration]="'700ms'"
  [easing]="'ease-out'"
  [startTransform]="'translateX(-100%)'"
  [endTransform]="'translateX(0)'"
>
  <div>Slide In Content</div>
</ng-motion>
```

### Fade In

```html
<ng-motion
  [duration]="'1s'"
  [easing]="'ease-in'"
  [startTransform]="'opacity(0)'"
  [endTransform]="'opacity(1)'"
>
  <div>Fade In Content</div>
</ng-motion>
```

### Scale Up

```html
<ng-motion
  [duration]="'500ms'"
  [easing]="'ease-in-out'"
  [startTransform]="'scale(0.5)'"
  [endTransform]="'scale(1)'"
>
  <button>Scaled Button</button>
</ng-motion>
```

---

## Validation and Error Handling

The library automatically validates your inputs. If you provide invalid values, it will:

1. Fallback to default values.
2. Log an error in the console for debugging.

### Example

If you provide an invalid duration:

```html
<ng-motion [duration]="'invalid'">Invalid Animation</ng-motion>
```

The library will use the default duration (`500ms`) and log an error in the console.

---

## License

MIT License

---

## Feedback and Contributions

We welcome contributions and feedback to make this library even better! Feel free to:

- Open issues for bugs or feature requests.
- Submit pull requests for improvements.

For questions or feedback, email us at [support@ngmotionfx.com](mailto:support@ngmotionfx.com).

---

Thank you for using Ng Motion FX! 🚀

