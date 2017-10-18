import { newId } from './componentsId';

export const addComponent = componentTypeId => ({
  type: 'COMPONENT_ADD',
  componentId: `${componentTypeId} ${newId(componentTypeId)}`,
  componentTypeId,
});
