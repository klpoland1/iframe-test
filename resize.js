function getDocHeight(doc) {
    		doc = doc || document;
				var body = doc.body, html = doc.documentElement;
				var height = Math.max( body.scrollHeight, body.offsetHeight, 
				    html.clientHeight, html.scrollHeight, html.offsetHeight );
				return height;
			}
