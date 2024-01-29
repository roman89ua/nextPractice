import React, { Fragment } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {concepts, features} from "@/app/docs/[[...slug]]/consts";



export type AllFeatures = (typeof features)[number];
export type AllConcepts = (typeof concepts)[number];
const isAFeature = (param: string): param is AllFeatures =>
  features.includes(param);

const isAConcept = (param: string): param is AllConcepts =>
  concepts.includes(param);

const DocsPage = ({ params }: { params: { slug: string[] } }) => {
  const isArray = Array.isArray(params?.slug);
  const slugLength2 = isArray && params?.slug.length === 2;
  const hasFeatureParam = isArray && isAFeature(params?.slug[0]);

  const hasConceptParam = isArray && isAConcept(params?.slug[1]);

  const thisRouteNotExist =
    (isArray && params?.slug.length >= 3) ||
    (slugLength2 && hasConceptParam && !hasFeatureParam) ||
    (slugLength2 && !hasConceptParam && hasFeatureParam) ||
    (isArray && params?.slug.length === 1 && !hasFeatureParam);

  if (thisRouteNotExist) {
    notFound();
  }

  if (hasFeatureParam && hasConceptParam) {
    return (
      <h1>
        Docs page with one slugs which are feature __{params.slug[0]}__ and
        concept param which is __{params.slug[1]}__
      </h1>
    );
  }

  if (hasFeatureParam) {
    return (
      <section>
        <h1>Docs page with one slug which is feature __{params?.slug[0]}__</h1>
        {concepts.map((concept, id) => {
          return (
            <Fragment key={`${concept}, count: ${id}`}>
              <Link href={{ pathname: `${params?.slug[0]}/${concept}` }}>
                {concept}
              </Link>
              <br />
            </Fragment>
          );
        })}
      </section>
    );
  }
  return (
    <section>
      <h1>Docs page</h1>
      {features.map((feature, id) => {
        return (
          <Fragment key={`${feature}, count: ${id}`}>
            <Link href={{ pathname: `docs/${feature}` }}>{feature}</Link>
            <br />
          </Fragment>
        );
      })}
    </section>
  );
};

export default DocsPage;
