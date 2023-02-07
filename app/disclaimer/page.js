import React from "react";

export default function Disclaimer() {
  return (
    <div className="mt-8 lg:mt-0 bg-white">
      <div className="mx-auto my-10 max-w-7xl py-10 px-8 sm:py-14 lg:px-6 lg:py-18">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <p className="text-2xl text-slate-900">Disclaimer</p>
        </div>
        <div className="prose prose-indigo mx-auto mt-5 text-slate-600 lg:col-start-1 lg:row-start-1 lg:max-w-none">
          <p>
            This statement has not been evaluated by the FDA. This product is
            not intended to diagnose, treat, cure or prevent any disease.
            Results may vary. Weight loss results are not guaranteed and may
            vary based on individual factors such as diet and exercise.The
            weight loss claims are specific and not vague or overly broad.
          </p>
          <p>
            Clear and conspicuous disclosures are included near relevant claims.
            There are no deceptive or false claims present in the advertising
            and marketing. No scientific proof is available to support weight
            loss claims, and all claims have been substantiated before being
            made.
          </p>
          <p>
            Weight loss requires a combination of diet and exercise, and it's
            always best to consult with a healthcare professional before
            starting any supplement regimen. As an affiliate with Alpilean, We
            receive commission for any sales made through my referral. We believe
            in the product and its potential benefits, but individual results
            may vary. Please consult a healthcare professional before starting
            any supplement regimen.
          </p>
        </div>
      </div>
    </div>
  );
}
