import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>
                    <title>Dashboard - SB Admin</title>
                    <link href="css/styles.css" rel="stylesheet"/>
                    <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet"
                          crossOrigin="anonymous"/>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js"
                            crossOrigin="anonymous"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                        crossOrigin="anonymous"/>
                <script src="js/scripts.js"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
                        crossOrigin="anonymous"/>
                <script src="assets/demo/chart-area-demo.js"/>
                <script src="assets/demo/chart-bar-demo.js"/>
                <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"
                        crossOrigin="anonymous"/>
                <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"
                        crossOrigin="anonymous"/>
                <script src="assets/demo/datatables-demo.js"/>
                </body>
            </Html>
        )
    }
}

export default MyDocument