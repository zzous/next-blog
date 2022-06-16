import Code from 'components/prism/Code'

const Craco = () => {
  return (
    <div>
      <div className='title'>carco.config.js</div>
      <Code language='js'>
        {
`const CracoAlias = require('craco-alias');

module.exports = {
  devServer: {
    compress: true,
    port: 8080,
    open: false,
    historyApiFallback: true
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: '.'
      }
    }
  ]
};
`
        }
      </Code>
    </div>
  )
}
export default Craco