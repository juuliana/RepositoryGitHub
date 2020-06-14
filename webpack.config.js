module.exports = {
    //arquivo principal
    entry: ['@babel/polyfill','./src/main.js'],
    //pra qual lugar e arquivo devo enviar a conversão
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer:{
        //o caminho pra onde deve abrir o servidor da aplicação
        contentBase: __dirname + '/public'
    },
    module:{
        //como o webpack deve se comportar com importação js
        rules: [
            {
                //se terminar com .js
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ],
    }
}