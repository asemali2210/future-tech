import type { Schema, Attribute } from '@strapi/strapi';

export interface InteractionInteraction extends Schema.Component {
  collectionName: 'components_interaction_interactions';
  info: {
    displayName: 'interaction';
    icon: 'eye';
    description: '';
  };
  attributes: {
    likes: Attribute.String;
    shares: Attribute.String;
    comments: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'interaction.interaction': InteractionInteraction;
    }
  }
}
