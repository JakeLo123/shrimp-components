import { Component, Prop, h } from '@stencil/core';
import { Variants } from './shrimp-header.enums';

@Component({
  tag: 'shrimp-header',
  styleUrl: 'shrimp-header.pcss',
  shadow: true,
})
export class ShrimpHeader {
  @Prop() variant: string = Variants.primary;

  render() {
    return (
      <h1 class="main">
        <slot />
        {this.variant === Variants.primary ? ' 🍤' : ' 🦐'}
      </h1>
    );
  }
}
