import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentDecorator } from 'twenty-ui';

import { FormProviderDecorator } from '~/testing/decorators/FormProviderDecorator';
import { IconsProviderDecorator } from '~/testing/decorators/IconsProviderDecorator';

import { mockedPersonObjectMetadataItem } from '~/testing/mock-data/metadata';
import { SettingsDataModelFieldIconLabelForm } from '../SettingsDataModelFieldIconLabelForm';

const StyledContainer = styled.div`
  flex: 1;
`;

const meta: Meta<typeof SettingsDataModelFieldIconLabelForm> = {
  title: 'Modules/Settings/DataModel/SettingsDataModelFieldIconLabelForm',
  component: SettingsDataModelFieldIconLabelForm,
  decorators: [
    (Story) => (
      <StyledContainer>
        <Story />
      </StyledContainer>
    ),
    FormProviderDecorator,
    IconsProviderDecorator,
    ComponentDecorator,
  ],
};

export default meta;
type Story = StoryObj<typeof SettingsDataModelFieldIconLabelForm>;

export const Default: Story = {};

export const WithFieldMetadataItem: Story = {
  args: {
    fieldMetadataItem: mockedPersonObjectMetadataItem.fields.find(
      ({ name }) => name === 'name',
    )!,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithMaxLength: Story = {
  args: {
    maxLength: 50,
  },
};