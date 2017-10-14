import { newId } from './componentsId';

export const addComponent = componentType => ({
  type: 'COMPONENT_ADD',
  id: `${componentType} ${newId(componentType)}`,
  componentType,
});
