import type { Schema, Attribute } from '@strapi/strapi';

export interface InteractionInteractionss extends Schema.Component {
  collectionName: 'components_interaction_interactionsses';
  info: {
    displayName: 'Interactionss';
    icon: 'earth';
  };
  attributes: {
    likes: Attribute.BigInteger;
    shares: Attribute.BigInteger;
    comments: Attribute.BigInteger;
  };
}

export interface InteractionInteraction extends Schema.Component {
  collectionName: 'components_interaction_interactions';
  info: {
    displayName: 'interaction';
    icon: 'eye';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'interaction.interactionss': InteractionInteractionss;
      'interaction.interaction': InteractionInteraction;
    }
  }
}
