import React from 'react';
import {render,cleanup,waitForElement} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import PetCard from '../src/components/petInventoryComponents/PetCard'
import 'react-native';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  renderer.create(<PetCard item="shirt" />);
});