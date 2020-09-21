const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js', // Name of generated bundle after build
    publicPath: '/canvas-snake/' // public URL of the output directory when referenced in a browser
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: { // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.css$/, // los ficheros .scss y .css activan esta regla
        
    },
    {
      test: /\.(scss|css)$/, // los ficheros .scss y .css activan esta regla
      use: [
          // 4. crea un bundle de todos los ficheros .css (eliminar si usamos style-loader ya
          // que lo cargariamos enlazandolo en index.html)
          MiniCssExtractPlugin.loader,  

          //'style-loader',     // 4. aplica los estilos (eliminar si usamos MiniCssExtractPlugin)
          'css-loader',       // 3. convierte los ficheros css a imports de JS
          'postcss-loader',   // 2. Autoprefixer para añadir prefijos por compatibilidad
      ],
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader',
        ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader',
      ],
    },
    ]
  },
  plugins: [ // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'build.css',
    }),
  ],
  devServer: { // configuration for webpack-dev-server
    contentBase: './src/public', // source of static assets
    port: 7700, // port to run dev-server
  }
};