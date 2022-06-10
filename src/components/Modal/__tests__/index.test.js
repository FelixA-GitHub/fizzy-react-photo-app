// __tests__/Modal.test.js
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from './Modal'

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

afterEach(cleanup)

describe('Modal component', () => {
    it('renders', () => {
      // baseline render component test
    })
      // snapshot test