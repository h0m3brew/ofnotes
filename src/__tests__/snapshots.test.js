import 'fake-indexeddb/auto';
import React from 'react';
import { render } from '../test-utils';

import BrandHeader from '../components/BrandHeader';
import Layout from '../components/Layout';
import MainPanel from '../components/MainPanel';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import { NoteTextField, NoteFormButton } from '../components/NoteFormInputs';



describe('component snapshots', () => {
  it('BrandHeader', () => {
    const { asFragment } = render(<BrandHeader />);
    expect(asFragment()).toMatchSnapshot();
  })


  it('Layout', () => {
    const { getByText, asFragment } = render(
      <Layout>
        <div>test child element</div>
      </Layout>
    )
    expect(getByText('test child element')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  })


  it('MainPanel', () => {
    const { getByText, asFragment } = render(
      <MainPanel>
        <div>test child element</div>
      </MainPanel>
    )
    expect(getByText('test child element')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('NoteList', () => {
    const notes = [
      { id: 1, slug: 'test-1', title: 'test 1', modified: '20191103', tags: ['test'] },
      { id: 2, slug: 'test-2', title: 'test 2', modified: '20191103', tags: ['test'] },
      { id: 3, slug: 'test-3', title: 'test 3', modified: '20191103', tags: ['test'] },
      { id: 4, slug: 'test-4', title: 'test 4', modified: '20191103', tags: ['test'] }
    ]
    const { asFragment } = render(<NoteList notes={notes} />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('NoteForm', () => {
    const values = {
      title: 'test note title',
      md: '# test md',
      tags: ['python', 'react']
    }
    const { asFragment } = render(<NoteForm values={values}
                                            formActions={
                                              <div>test element</div>
                                            } />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('NoteTextField', () => {
    const { asFragment } = render(<NoteTextField value='test value' />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('NoteFormButton', () => {
    const { asFragment } = render(<NoteFormButton>Test btn</NoteFormButton>)
    expect(asFragment()).toMatchSnapshot()
  })
})