﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from 'a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ListDoubleClickableImageLeft } from "../../mui-a11y-tb/templates/ListDoubleClickableImageLeft";
import { ListDoubleImageClickableImageLeft }  from "../../mui-a11y-tb/templates/ListDoubleImageClickableImageLeft";
import { ListDoubleImageWideClickableImageLeft }  from "../../mui-a11y-tb/templates/ListDoubleImageWideClickableImageLeft";
import { ListDoubleIconSmallClickableImageLeft }  from "../../mui-a11y-tb/templates/ListDoubleIconSmallClickableImageLeft";
import { ListDoubleIconLargeClickableImageLeft } from "../../mui-a11y-tb/templates/ListDoubleIconLargeClickableImageLeft";
import { ListDoubleAvatarClickableImageLeft } from "../../mui-a11y-tb/templates/ListDoubleAvatarClickableImageLeft";

interface Props {
    colorMode?: string;
}


export const ListsDoubleClickableImageLeft: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="Templates" heading="Lists, Double Line" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className={colorMode}></div>
              <ExampleSection>
                <div className="subtitle1">List, Standard</div>
                <ListDoubleClickableImageLeft className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">List, with avatars</div>
                <ListDoubleAvatarClickableImageLeft className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">List, with images</div>
                <ListDoubleImageClickableImageLeft className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">List, with wide images</div>
                <ListDoubleImageWideClickableImageLeft className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">List, with icons</div>
                <ListDoubleIconSmallClickableImageLeft className={"top40 " + colorMode} />
                <p></p>
                <div className="subtitle1">List, with wide icons</div>
                <ListDoubleIconLargeClickableImageLeft className={"top40 " + colorMode} />
                <p></p>
              </ExampleSection>
          </div>
      )
  }
