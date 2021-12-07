import { fireEvent, render } from '@testing-library/vue'

import DsfrTableHeader from './DsfrTableHeader.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrTableHeader', () => {
  it('should render simple header cell', async () => {
    const header = 'En-tête'

    const { container } = render(DsfrTableHeader, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        header,
      },
    })

    const thEl = container.querySelector('th')

    expect(thEl).toContainHTML(header)
  })

  it('should render header cell with headerAttrs', async () => {
    const headerText = 'En-tête'
    const onClick = jest.fn()

    const { container } = render(DsfrTableHeader, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        header: headerText,
        headerAttrs: {
          onClick,
        },
      },
    })

    const thEl = container.querySelector('th')

    await fireEvent.click(thEl)

    expect(thEl).toContainHTML(headerText)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
