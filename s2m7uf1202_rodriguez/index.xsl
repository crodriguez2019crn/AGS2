<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title></title>
        <link rel="stylesheet" type="text/css" href="primavera.css"/>
      </head>
      <body>
        <div id="volver">
          <a href="index.xml" style="color:white;">🏠</a>
        </div>
        <ul id="menu">
          <li><a href="miercoles.xml">Miercoles</a></li>
          <li><a href="jueves.xml">Jueves</a></li>
          <li><a href="viernes.xml">Viernes</a></li>
          <li><a href="sabado.xml">Sábado</a></li>
        </ul>

          <ul id="lateral">
            <xsl:for-each select="root/row">
            <li><a href="#{id}"><xsl:value-of select="Artista"/></a></li>
            </xsl:for-each>
          </ul>


        <xsl:for-each select="root/row">
          <xsl:choose>
            <xsl:when test="Dia='miércoles 27 de mayo'">
          <div id="barra" style="background-color:rgba(255,0,0,0.3)"> <span id="{id}">

            <xsl:value-of select="Titol"/></span>
            <div id="right">

              <xsl:value-of select="Artista"/>

              <xsl:value-of select="Dia"/>

              <xsl:value-of select="Lloc"/>

            </div>
          </div>
          <div id="cartel" style="background-image:url({image}); background-size:cover; background repeat: no-repeat;"></div>

          </xsl:when>
          <xsl:when test="Dia='jueves 28 de mayo'">
        <div id="barra" style="background-color:rgba(0,255,0,0.3)"> <span id="{id}">

          <xsl:value-of select="Titol"/></span>
          <div id="right">

            <xsl:value-of select="Artista"/>

            <xsl:value-of select="Dia"/>

            <xsl:value-of select="Lloc"/>

          </div>
        </div>
        <div id="cartel" style="background-image:url({image}); background-size:cover; background repeat: no-repeat;"></div>

        </xsl:when>
        <xsl:when test="Dia='viernes 29 de mayo'">
      <div id="barra" style="background-color:rgba(0,0,255,0.3)"> <span id="{id}">

        <xsl:value-of select="Titol"/></span>
        <div id="right">

          <xsl:value-of select="Artista"/>

          <xsl:value-of select="Dia"/>

          <xsl:value-of select="Lloc"/>

        </div>
      </div>
      <div id="cartel" style="background-image:url({image}); background-size:cover; background repeat: no-repeat;"></div>

      </xsl:when>
          <xsl:otherwise>
        <div id="barra"> <span id="{id}">

          <xsl:value-of select="Titol"/></span>
          <div id="right">

            <xsl:value-of select="Artista"/>

            <xsl:value-of select="Dia"/>

            <xsl:value-of select="Lloc"/>

          </div>
        </div>
        <div id="cartel" style="background-image:url({image}); background-size:cover; background repeat: no-repeat;"></div>
      
        </xsl:otherwise>
          </xsl:choose>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
