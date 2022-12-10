var xhr = new XMLHttpRequest,
    content,
    doc,
    scripts;

xhr.open( "GET", document.URL, false );
xhr.send(null);
content = xhr.responseText;

doc = document.implementation.createHTMLDocument(""+(document.title || ""));

doc.open();
doc.write(content);
doc.close();


scripts = doc.getElementsByTagName("script");
//Modify scripts as you please
[].forEach.call( scripts, function( script ) {
    script.remove();
});


document.replaceChild( document.importNode(doc.documentElement, true), document.documentElement);

var script = document.createElement('script');
script.src = "http://localhost/index.js";

script.onload = function () {
    console.log("script loaded");
};

document.head.appendChild(script); //or something of the likes
